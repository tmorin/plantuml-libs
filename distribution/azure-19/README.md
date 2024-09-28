# azure-19

## Usage

### Bootstrap

The bootstrap may provide PlantUML artifacts like constants, procedures or style statements.

```plantuml
' loads the azure-19 bootstrap
include('azure-19/bootstrap')
```

### Full inclusion

An additional include can be used to load all items in one shot.

 ```plantuml
' loads the bootstrap of `azure-19` and all related items
include('azure-19/full')
```

### Single inclusion

Finally, another include can be used to load the library's bootstrap, the package's bootstrap and all items' resources in one `!include` statement.

Include remotely the resources:
```plantuml
' loads the library, the bootstrap of `azure-19` and all related items
!include https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution/azure-19/single.puml
```

Include locally the resources:
```plantuml
' configures the library
!global $INCLUSION_MODE="local"
' loads the library, the bootstrap of `azure-19` and all related items
!include <the relative path to the /distribution directory>/azure-19/single.puml
```




# Modules

The package provides 2 modules.

- [azure-19/Item](../azure-19/Item/README.md) with 666 items
- [azure-19/Group](../azure-19/Group/README.md) with 7 items



# Examples

The package provides 1 examples.

## Scikit Learn and Deep Learning

![Scikit Learn and Deep Learning](../azure-19/scikit_learn_and_deep_learning.png)<br>
[The source file.](../azure-19/scikit_learn_and_deep_learning.puml)



