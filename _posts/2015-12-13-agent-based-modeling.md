---
layout: post
title: Modeling Epidemics - Mathematical Models versus Agent-based Modeling
---
With the end of the fall semester here at Rice I have a lot more free time to take on personal projects and explore some of the material I learned this semester in more depth. To this end, I have started revisting material from my EBIO 331 (Biology of Infectious Disease) course. One thing that I was particularly interesting in during my studies in this class was the potential for computational modeling to be used in this field. In order to explore this subject further, I've begun to implement some such models using Python!

###Approaches to Modeling
There are a couple of means of modeling the progress of epidemics:

1. <p>Mathematical models: There are several mathematical models which allow for simplistic, yet accurate, description of certain disease outbreaks.</p>
<p>Two such models, SIR and SIRD, describe the progression of disease in a population using probabilities that an individual will transition between states. These states are Susceptible (S), Infected (I), Resistant/Recovered (R) and Dead (D). For instance, a pathogen's infectiousness, a population's susceptibility to the given infection, and environmental conditions can be simplified down to an estimate of the probability that an average individual will become infected in a time-step. This <a href="http://www.maa.org/press/periodicals/loci/joma/the-sir-model-for-spread-of-disease-the-differential-equation-model" target="_blank">Math Association of America article</a> goes into further detail on SIR models of epidemics.  </p>
2. <p>Agent-based models: While mathematical models can provide some very accurate results with strong predictive value, they fail to take into consideration all of the factors which can govern a system as complex and chaotic as the spread of disease in a real population. Herein lies the value of agent-based modeling.</p>
<p>Agent-based modeling is a technique which leverages the power of computation to simulate systems in which a disease might spread. The goal of agent-based modeling is to design a computational laboratory that can be used to test the impact of various variables on disease progression in a complex system such as a human social network. Nonetheless, we try and keep our models as simple as possible so as to save time on un-needed coding and run-time. It might help to begin by describing what exactly an agent is in the context of modeling.

###The Agents in Our Model
No, unfortunately, our agents are not particularly secretive nor bad-ass. Instead, an agent can be thought of as anything in our simulation which might take actions. In our case, this is likely a creature, which can age, eat, sleep, visit locations, interact with other organisms, get infected with disease, recover, reproduce and die. It might also be a bacteria, which can infect a creature, and kill it after a set period of time. You, as the programmer, may be responsible for designing all of the behaviors which an actor may take in your simulation, as well as how these behaviors impact the world around them.

In essence, the designer of an agent based model is tasked with creating a simplified representation of the world using software. Now, there are a number of different ways in which a researcher might go about creating a model world to be used for studying disease. These techniques range widely in the complexity of usage, and the effort needed to get up and running.

Numerous programs already exist to in order to model and predict outcomes in certain systems. A 2010 <a href="http://www.linuxjournal.com/content/distributed-agent-based-modeling">Linux Journal article</a> describes an early ABM called EpiSims, which used distributed computing to simulate the interactions of city denizens in order to model the spread of diseases in an urban setting. By modifying certain disease characteristics, or implementing public health interventions in their model, researchers were able to use EpiSims test their hypothesis about the spread of disease. This same model has been used to inform decisions in US public health policy.

###EpiSims: A model case for ABM

EpiSims provides a good case-study to further flesh-out the concept of an ABM. The software was written in C++ during the mid 1990s at Los Alamos National Lab.

So, what were the agents in EpiSims? Well, the certainly weren't all living. The simulation contained three different agents:
1. Pathogens: These are the infectious agents (pathogens) which are causing the disease in this sim.
2. People: These are the hosts of the pathogens, and are the major transmitters of the disease.
3. Locations: In an urban environment, interactions with the environment have serious implications for the spread of disease. If a person is in a crowded building or subway, they are far more likely to get infected (with many diseases). Certain locations may also serve as fomites (objects which are capable of harboring pathogens and spreading disease). For instance, if an individual touches an infected doorknob or other surface, that was contaminated by a previous visitor.

###Concluding Thoughts
