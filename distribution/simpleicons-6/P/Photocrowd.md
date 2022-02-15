# Photocrowd


```text
simpleicons-6/P/Photocrowd
```

```text
include('simpleicons-6/P/Photocrowd')
```



| Illustration | Photocrowd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Photocrowd.png) | ![illustration for Photocrowd](../../simpleicons-6/P/Photocrowd.Local.png) |




## Photocrowd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Photocrowd
include('simpleicons-6/P/Photocrowd')

' renders the element
Photocrowd('Photocrowd', 'Photocrowd', 'an optional tech label')
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

' loads the Item which embeds the element Photocrowd
include('simpleicons-6/P/Photocrowd')

' renders the element
Photocrowd('Photocrowd', 'Photocrowd', 'an optional tech label')
@enduml
```

