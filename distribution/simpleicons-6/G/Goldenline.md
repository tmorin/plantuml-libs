# Goldenline


```text
simpleicons-6/G/Goldenline
```

```text
include('simpleicons-6/G/Goldenline')
```



| Illustration | Goldenline |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Goldenline.png) | ![illustration for Goldenline](../../simpleicons-6/G/Goldenline.Local.png) |




## Goldenline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Goldenline
include('simpleicons-6/G/Goldenline')

' renders the element
Goldenline('Goldenline', 'Goldenline', 'an optional tech label')
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

' loads the Item which embeds the element Goldenline
include('simpleicons-6/G/Goldenline')

' renders the element
Goldenline('Goldenline', 'Goldenline', 'an optional tech label')
@enduml
```

