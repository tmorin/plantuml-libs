# Remedyentertainment


```text
simpleicons-14/R/Remedyentertainment
```

```text
include('simpleicons-14/R/Remedyentertainment')
```



| Illustration | Remedyentertainment |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Remedyentertainment.png) | ![illustration for Remedyentertainment](../../simpleicons-14/R/Remedyentertainment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemedyentertainmentXs>`
- `<$RemedyentertainmentSm>`
- `<$RemedyentertainmentMd>`
- `<$RemedyentertainmentLg>`





## Remedyentertainment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Remedyentertainment
include('simpleicons-14/R/Remedyentertainment')

' renders the element
Remedyentertainment('Remedyentertainment', 'Remedyentertainment', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Remedyentertainment
include('simpleicons-14/R/Remedyentertainment')

' renders the element
Remedyentertainment('Remedyentertainment', 'Remedyentertainment', 'an optional tech label', 'an optional description')
@enduml
```

