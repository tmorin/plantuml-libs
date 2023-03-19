# Svgo


```text
simpleicons-8/S/Svgo
```

```text
include('simpleicons-8/S/Svgo')
```



| Illustration | Svgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Svgo.png) | ![illustration for Svgo](../../simpleicons-8/S/Svgo.Local.png) |




## Svgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Svgo
include('simpleicons-8/S/Svgo')

' renders the element
Svgo('Svgo', 'Svgo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Svgo
include('simpleicons-8/S/Svgo')

' renders the element
Svgo('Svgo', 'Svgo', 'an optional tech label', 'an optional description')
@enduml
```
