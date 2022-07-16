# Googleassistant


```text
simpleicons-7/G/Googleassistant
```

```text
include('simpleicons-7/G/Googleassistant')
```



| Illustration | Googleassistant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googleassistant.png) | ![illustration for Googleassistant](../../simpleicons-7/G/Googleassistant.Local.png) |




## Googleassistant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googleassistant
include('simpleicons-7/G/Googleassistant')

' renders the element
Googleassistant('Googleassistant', 'Googleassistant', 'an optional tech label')
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

' loads the Item which embeds the element Googleassistant
include('simpleicons-7/G/Googleassistant')

' renders the element
Googleassistant('Googleassistant', 'Googleassistant', 'an optional tech label')
@enduml
```

