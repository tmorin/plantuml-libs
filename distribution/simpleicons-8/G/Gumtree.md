# Gumtree


```text
simpleicons-8/G/Gumtree
```

```text
include('simpleicons-8/G/Gumtree')
```



| Illustration | Gumtree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gumtree.png) | ![illustration for Gumtree](../../simpleicons-8/G/Gumtree.Local.png) |




## Gumtree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gumtree
include('simpleicons-8/G/Gumtree')

' renders the element
Gumtree('Gumtree', 'Gumtree', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gumtree
include('simpleicons-8/G/Gumtree')

' renders the element
Gumtree('Gumtree', 'Gumtree', 'an optional tech label', 'an optional description')
@enduml
```

