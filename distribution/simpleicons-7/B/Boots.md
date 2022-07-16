# Boots


```text
simpleicons-7/B/Boots
```

```text
include('simpleicons-7/B/Boots')
```



| Illustration | Boots |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Boots.png) | ![illustration for Boots](../../simpleicons-7/B/Boots.Local.png) |




## Boots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Boots
include('simpleicons-7/B/Boots')

' renders the element
Boots('Boots', 'Boots', 'an optional tech label')
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

' loads the Item which embeds the element Boots
include('simpleicons-7/B/Boots')

' renders the element
Boots('Boots', 'Boots', 'an optional tech label')
@enduml
```

