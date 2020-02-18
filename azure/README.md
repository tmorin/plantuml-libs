# AZURE

## Include the library

Include remotely the library:
```plantuml
@startuml
!global $AZURE_LIB_BRANCH="master"
!global $AZURE_LIB_BASE_URL="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $AZURE_LIB_BRANCH + "/azure"
!includeurl $AZURE_LIB_BASE_URL/library.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
!global $INCLUSION_MODE="local"
!include library.puml
@enduml
```

## Include the sub-libraries

Additional sub-libraries can be included.

```plantuml
@startuml
includeSubLibrary("groups")
includeSubLibrary("elements/AiAndMlServiceColor")
includeSubLibrary("elements/ContainerServiceColor")
includeSubLibrary("elements/FlatSymbols")
includeSubLibrary("elements/IntuneServiceColor")
@enduml
```

## Sub libraries

- [The Elements](elements/README.md)
- [The Groups](groups.md)
- [The Sprites](sprites.md)

## Examples

### Training of Python scikit-learn and deep learning models on Azure

![example: Training of Python scikit-learn and deep learning models on Azure](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/azure/example-scikit_learn_and_deep_learning.puml&fmt=FORMAT)

* The source: [Microsoft - Reference Architectures](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/ai/training-python-models)
* The source file: [example-scikit_learn_and_deep_learning.puml](example-scikit_learn_and_deep_learning.puml)
