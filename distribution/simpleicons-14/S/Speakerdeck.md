# Speakerdeck


```text
simpleicons-14/S/Speakerdeck
```

```text
include('simpleicons-14/S/Speakerdeck')
```



| Illustration | Speakerdeck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Speakerdeck.png) | ![illustration for Speakerdeck](../../simpleicons-14/S/Speakerdeck.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Speakerdeck
include('simpleicons-14/S/Speakerdeck')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Speakerdeck
include('simpleicons-14/S/Speakerdeck')

' renders the element
Speakerdeck('Speakerdeck', 'Speakerdeck', 'an optional tech label', 'an optional description')
@enduml
```

