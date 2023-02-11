# Electronfiddle


```text
simpleicons-8/E/Electronfiddle
```

```text
include('simpleicons-8/E/Electronfiddle')
```



| Illustration | Electronfiddle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Electronfiddle.png) | ![illustration for Electronfiddle](../../simpleicons-8/E/Electronfiddle.Local.png) |




## Electronfiddle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Electronfiddle
include('simpleicons-8/E/Electronfiddle')

' renders the element
Electronfiddle('Electronfiddle', 'Electronfiddle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Electronfiddle
include('simpleicons-8/E/Electronfiddle')

' renders the element
Electronfiddle('Electronfiddle', 'Electronfiddle', 'an optional tech label', 'an optional description')
@enduml
```

