# Gumtree


```text
simpleicons-5/G/Gumtree
```

```text
include('simpleicons-5/G/Gumtree')
```



| Illustration | Gumtree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gumtree.png) | ![illustration for Gumtree](../../simpleicons-5/G/Gumtree.Local.png) |




## Gumtree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gumtree
include('simpleicons-5/G/Gumtree')

' renders the element
Gumtree('Gumtree', 'Gumtree', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gumtree
include('simpleicons-5/G/Gumtree')

' renders the element
Gumtree('Gumtree', 'Gumtree', 'an optional tech label')
@enduml
```

