# Photocrowd


```text
simpleicons-5/P/Photocrowd
```

```text
include('simpleicons-5/P/Photocrowd')
```



| Illustration | Photocrowd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Photocrowd.png) | ![illustration for Photocrowd](../../simpleicons-5/P/Photocrowd.Local.png) |




## Photocrowd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Photocrowd
include('simpleicons-5/P/Photocrowd')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Photocrowd
include('simpleicons-5/P/Photocrowd')

' renders the element
Photocrowd('Photocrowd', 'Photocrowd', 'an optional tech label')
@enduml
```

