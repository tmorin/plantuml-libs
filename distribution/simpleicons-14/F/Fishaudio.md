# Fishaudio


```text
simpleicons-14/F/Fishaudio
```

```text
include('simpleicons-14/F/Fishaudio')
```



| Illustration | Fishaudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fishaudio.png) | ![illustration for Fishaudio](../../simpleicons-14/F/Fishaudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FishaudioXs>`
- `<$FishaudioSm>`
- `<$FishaudioMd>`
- `<$FishaudioLg>`





## Fishaudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fishaudio
include('simpleicons-14/F/Fishaudio')

' renders the element
Fishaudio('Fishaudio', 'Fishaudio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fishaudio
include('simpleicons-14/F/Fishaudio')

' renders the element
Fishaudio('Fishaudio', 'Fishaudio', 'an optional tech label', 'an optional description')
@enduml
```

