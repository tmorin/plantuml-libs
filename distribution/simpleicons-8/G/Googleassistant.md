# Googleassistant


```text
simpleicons-8/G/Googleassistant
```

```text
include('simpleicons-8/G/Googleassistant')
```



| Illustration | Googleassistant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleassistant.png) | ![illustration for Googleassistant](../../simpleicons-8/G/Googleassistant.Local.png) |




## Googleassistant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleassistant
include('simpleicons-8/G/Googleassistant')

' renders the element
Googleassistant('Googleassistant', 'Googleassistant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleassistant
include('simpleicons-8/G/Googleassistant')

' renders the element
Googleassistant('Googleassistant', 'Googleassistant', 'an optional tech label', 'an optional description')
@enduml
```

