# Boulanger


```text
simpleicons/B/Boulanger
```

```text
include('simpleicons/B/Boulanger')
```



| Illustration | Boulanger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Boulanger.png) | ![illustration for Boulanger](../../simpleicons/B/Boulanger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoulangerXs>`
- `<$BoulangerSm>`
- `<$BoulangerMd>`
- `<$BoulangerLg>`





## Boulanger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Boulanger
include('simpleicons/B/Boulanger')

' renders the element
Boulanger('Boulanger', 'Boulanger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boulanger
include('simpleicons/B/Boulanger')

' renders the element
Boulanger('Boulanger', 'Boulanger', 'an optional tech label', 'an optional description')
@enduml
```

