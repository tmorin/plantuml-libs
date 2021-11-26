# Leaf


```text
fontawesome-5/Solid/Leaf
```

```text
include('fontawesome-5/Solid/Leaf')
```



| Illustration | Leaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Leaf.png) | ![illustration for Leaf](../../fontawesome-5/Solid/Leaf.Local.png) |




## Leaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Leaf
include('fontawesome-5/Solid/Leaf')

' renders the element
Leaf('Leaf', 'Leaf', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Leaf
include('fontawesome-5/Solid/Leaf')

' renders the element
Leaf('Leaf', 'Leaf', 'an optional tech label')
@enduml
```

