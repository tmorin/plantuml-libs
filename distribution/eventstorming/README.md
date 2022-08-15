# eventstorming

## Presentation
This package implements the notation provided in [EventStorming](https://www.eventstorming.com).

## Usage

### Bootstrap

The bootstrap may provide PlantUML artifacts like constants, procedures or style statements.

```plantuml
' loads the eventstorming bootstrap
include('eventstorming/bootstrap')
```

### Full inclusion

An additional include can be used to load all items in one shot.

 ```plantuml
' loads the bootstrap of `eventstorming` and all related items
include('eventstorming/full')
```

### Single inclusion

Finally, another include can be used to load the library's bootstrap, the package's bootstrap and all items' resources in one `!include` statement.

Include remotely the resources:
```plantuml
' loads the library, the bootstrap of `eventstorming` and all related items
!include https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution/eventstorming/single.puml
```

Include locally the resources:
```plantuml
' configures the library
!global $INCLUSION_MODE="local"
' loads the library, the bootstrap of `eventstorming` and all related items
!include <the relative path to the /distribution directory>/eventstorming/single.puml
```




# Modules

The package provides 1 modules.

- [eventstorming/Element](../eventstorming/Element/README.md) with 18 items



# Examples

The package provides 4 examples.

## All elements

![All elements](../eventstorming/all_elements.png)<br>
[The source file.](../eventstorming/all_elements.puml)

## Book flow

![Book flow](../eventstorming/book_flow.png)<br>
[The source file.](../eventstorming/book_flow.puml)

## Causality chain

![Causality chain](../eventstorming/causality_chain.png)<br>
[The source file.](../eventstorming/causality_chain.puml)

## Hoozbuzzing

![Hoozbuzzing](../eventstorming/hoozbuzzing.png)<br>
[The source file.](../eventstorming/hoozbuzzing.puml)



