# Picartodottv


```text
simpleicons-5/P/Picartodottv
```

```text
include('simpleicons-5/P/Picartodottv')
```



| Illustration | Picartodottv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Picartodottv.png) | ![illustration for Picartodottv](../../simpleicons-5/P/Picartodottv.Local.png) |




## Picartodottv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Picartodottv
include('simpleicons-5/P/Picartodottv')

' renders the element
Picartodottv('Picartodottv', 'Picartodottv', 'an optional tech label')
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

' loads the Item which embeds the element Picartodottv
include('simpleicons-5/P/Picartodottv')

' renders the element
Picartodottv('Picartodottv', 'Picartodottv', 'an optional tech label')
@enduml
```

