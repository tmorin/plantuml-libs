# Elsevier


```text
simpleicons-7/E/Elsevier
```

```text
include('simpleicons-7/E/Elsevier')
```



| Illustration | Elsevier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Elsevier.png) | ![illustration for Elsevier](../../simpleicons-7/E/Elsevier.Local.png) |




## Elsevier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Elsevier
include('simpleicons-7/E/Elsevier')

' renders the element
Elsevier('Elsevier', 'Elsevier', 'an optional tech label')
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

' loads the Item which embeds the element Elsevier
include('simpleicons-7/E/Elsevier')

' renders the element
Elsevier('Elsevier', 'Elsevier', 'an optional tech label')
@enduml
```

