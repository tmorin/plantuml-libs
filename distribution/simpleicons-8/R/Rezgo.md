# Rezgo


```text
simpleicons-8/R/Rezgo
```

```text
include('simpleicons-8/R/Rezgo')
```



| Illustration | Rezgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rezgo.png) | ![illustration for Rezgo](../../simpleicons-8/R/Rezgo.Local.png) |




## Rezgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rezgo
include('simpleicons-8/R/Rezgo')

' renders the element
Rezgo('Rezgo', 'Rezgo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rezgo
include('simpleicons-8/R/Rezgo')

' renders the element
Rezgo('Rezgo', 'Rezgo', 'an optional tech label', 'an optional description')
@enduml
```

