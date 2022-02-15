# Svgo


```text
simpleicons-6/S/Svgo
```

```text
include('simpleicons-6/S/Svgo')
```



| Illustration | Svgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Svgo.png) | ![illustration for Svgo](../../simpleicons-6/S/Svgo.Local.png) |




## Svgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Svgo
include('simpleicons-6/S/Svgo')

' renders the element
Svgo('Svgo', 'Svgo', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Svgo
include('simpleicons-6/S/Svgo')

' renders the element
Svgo('Svgo', 'Svgo', 'an optional tech label')
@enduml
```

