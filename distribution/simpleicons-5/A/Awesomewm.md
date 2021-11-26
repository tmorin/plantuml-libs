# Awesomewm


```text
simpleicons-5/A/Awesomewm
```

```text
include('simpleicons-5/A/Awesomewm')
```



| Illustration | Awesomewm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Awesomewm.png) | ![illustration for Awesomewm](../../simpleicons-5/A/Awesomewm.Local.png) |




## Awesomewm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Awesomewm
include('simpleicons-5/A/Awesomewm')

' renders the element
Awesomewm('Awesomewm', 'Awesomewm', 'an optional tech label')
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

' loads the Item which embeds the element Awesomewm
include('simpleicons-5/A/Awesomewm')

' renders the element
Awesomewm('Awesomewm', 'Awesomewm', 'an optional tech label')
@enduml
```

