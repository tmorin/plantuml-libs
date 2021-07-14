# Rezgo


```text
simpleicons-5/R/Rezgo
```

```text
include('simpleicons-5/R/Rezgo')
```



| Illustration | Rezgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rezgo.png) | ![illustration for Rezgo](../../simpleicons-5/R/Rezgo.Local.png) |




## Rezgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rezgo
include('simpleicons-5/R/Rezgo')

' renders the element
Rezgo('Rezgo', 'Rezgo', 'an optional tech label')
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

' loads the Item which embeds the element Rezgo
include('simpleicons-5/R/Rezgo')

' renders the element
Rezgo('Rezgo', 'Rezgo', 'an optional tech label')
@enduml
```

