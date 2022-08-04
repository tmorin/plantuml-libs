# Mobxstatetree


```text
simpleicons-7/M/Mobxstatetree
```

```text
include('simpleicons-7/M/Mobxstatetree')
```



| Illustration | Mobxstatetree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mobxstatetree.png) | ![illustration for Mobxstatetree](../../simpleicons-7/M/Mobxstatetree.Local.png) |




## Mobxstatetree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mobxstatetree
include('simpleicons-7/M/Mobxstatetree')

' renders the element
Mobxstatetree('Mobxstatetree', 'Mobxstatetree', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mobxstatetree
include('simpleicons-7/M/Mobxstatetree')

' renders the element
Mobxstatetree('Mobxstatetree', 'Mobxstatetree', 'an optional tech label', 'an optional description')
@enduml
```

