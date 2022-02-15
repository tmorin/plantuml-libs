# Googlephotos


```text
simpleicons-6/G/Googlephotos
```

```text
include('simpleicons-6/G/Googlephotos')
```



| Illustration | Googlephotos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlephotos.png) | ![illustration for Googlephotos](../../simpleicons-6/G/Googlephotos.Local.png) |




## Googlephotos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlephotos
include('simpleicons-6/G/Googlephotos')

' renders the element
Googlephotos('Googlephotos', 'Googlephotos', 'an optional tech label')
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

' loads the Item which embeds the element Googlephotos
include('simpleicons-6/G/Googlephotos')

' renders the element
Googlephotos('Googlephotos', 'Googlephotos', 'an optional tech label')
@enduml
```

