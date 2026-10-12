# Fawry


```text
simpleicons/F/Fawry
```

```text
include('simpleicons/F/Fawry')
```



| Illustration | Fawry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fawry.png) | ![illustration for Fawry](../../simpleicons/F/Fawry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FawryXs>`
- `<$FawrySm>`
- `<$FawryMd>`
- `<$FawryLg>`





## Fawry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fawry
include('simpleicons/F/Fawry')

' renders the element
Fawry('Fawry', 'Fawry', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fawry
include('simpleicons/F/Fawry')

' renders the element
Fawry('Fawry', 'Fawry', 'an optional tech label', 'an optional description')
@enduml
```

