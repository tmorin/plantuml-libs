# azure

## Usage

### Bootstrap

The bootstrap may provide PlantUML artifacts like constants, procedures or style statements.

```plantuml
' loads the azure bootstrap
include('azure/bootstrap')
```

### Full inclusion

An additional include can be used to load all items in one shot.

 ```plantuml
' loads the bootstrap of `azure` and all related items
include('azure/full')
```

### Single inclusion

Finally, another include can be used to load the library's bootstrap, the package's bootstrap and all items' resources in one `!include` statement.

Include remotely the resources:
```plantuml
' loads the library, the bootstrap of `azure` and all related items
!include https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution/azure/single.puml
```

Include locally the resources:
```plantuml
' configures the library
!global $INCLUSION_MODE="local"
' loads the library, the bootstrap of `azure` and all related items
!include <the relative path to the /distribution directory>/azure/single.puml
```




# Modules

The package provides 2 modules.

- [azure/Item](../azure/Item/README.md) with 700 items
- [azure/Group](../azure/Group/README.md) with 7 items



# Examples

The package provides 1 examples.

## Scikit Learn and Deep Learning

![Scikit Learn and Deep Learning](../azure/scikit_learn_and_deep_learning.png)<br>
[The source file.](../azure/scikit_learn_and_deep_learning.puml)



