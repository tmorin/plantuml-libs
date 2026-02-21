# Speakerdeck


```text
simpleicons/S/Speakerdeck
```

```text
include('simpleicons/S/Speakerdeck')
```



| Illustration | Speakerdeck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Speakerdeck.png) | ![illustration for Speakerdeck](../../simpleicons/S/Speakerdeck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeakerdeckXs>`
- `<$SpeakerdeckSm>`
- `<$SpeakerdeckMd>`
- `<$SpeakerdeckLg>`





## Speakerdeck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Speakerdeck
include('simpleicons/S/Speakerdeck')

' renders the element
Speakerdeck('Speakerdeck', 'Speakerdeck', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Speakerdeck
include('simpleicons/S/Speakerdeck')

' renders the element
Speakerdeck('Speakerdeck', 'Speakerdeck', 'an optional tech label', 'an optional description')
@enduml
```

