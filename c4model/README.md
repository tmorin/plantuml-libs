# C4 Model

Library implementing elements respecting the [C4 Model](https://c4model.com).

## Install

To include every thing:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
@enduml
```

## Elements

### Person

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
Person("p1", "A person", "An optional description.")
@enduml
```

![person](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=0&person)

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
ExternalPerson("ep1", "An external person", "An optional description.")
@enduml
```

![external person](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=1&external_person)

### Software System

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
System("s1", "A system", "An optional description.")
@enduml
```

![system](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=2&system)

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
ExternalSystem("es1", "An external system", "An optional description.")
@enduml
```

![external system](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=3&external_system)

### Container

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
Container("c1", "A container", "An optional description.", "optional technology")
@enduml
```

![container](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=4&container)

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
Database("d1", "A database", "An optional description.", "optional technology")
@enduml
```

![database](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=5&database)

### Component

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
Component("c1", "A component", "An optional description.", "optional technology")
@enduml
```

![component](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=6&component)

### Boundary

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
Enterprise("e1", "An enterprise") {
    SystemBoundary("s1", "A system") {
        ContainerBoundary("c1", "A container") {
            note "the container area" as NC
        }
        note "the system area" as NS
    }
    note "the enterprise area" as NE
}
@enduml
```

![boundaries](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=7&boundary)

### Relationship

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
Person("p1", "A person")
System("s1", "A system")
p1 -> s1 : Relationship("an optional name", "optional technology")
@enduml
```

![relationship](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=8&relationship)

## Layout

### Title

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
title("the title of the diagram", "an optional subtitle", "an optional version", "an optional date")
@enduml
```

![title](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=9&title)

### Legend

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
legend()
@enduml
```

![legend](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/README.puml&idx=10&legend)

## Views

### Level 1: System Context diagram

You will find more information about the System Context diagram on [c4model.com](https://c4model.com/#SystemContextDiagram).

![example system context diagram](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/example-lvl1-SystemContext.puml)

The source: [example-lvl1-SystemContext.puml](example-lvl1-SystemContext.puml)

### Level 2: Container diagram

You will find more information about the Container diagram on [c4model.com](https://c4model.com/#ContainerDiagram).

![example container diagram](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/example-lvl2-Container.puml)

The source: [example-lvl2-Container.puml](example-lvl2-Container.puml)

### Level 3: Component diagram

You will find more information about the Container diagram on [c4model.com](https://c4model.com/#ComponentDiagram).

![example component diagram](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/example-lvl3-Component.puml)

The source: [example-lvl3-Component.puml](example-lvl3-Component.puml)
