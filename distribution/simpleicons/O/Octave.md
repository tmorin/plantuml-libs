# Octave


```text
simpleicons/O/Octave
```

```text
include('simpleicons/O/Octave')
```



| Illustration | Octave |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Octave.png) | ![illustration for Octave](../../simpleicons/O/Octave.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OctaveXs>`
- `<$OctaveSm>`
- `<$OctaveMd>`
- `<$OctaveLg>`





## Octave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Octave
include('simpleicons/O/Octave')

' renders the element
Octave('Octave', 'Octave', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Octave
include('simpleicons/O/Octave')

' renders the element
Octave('Octave', 'Octave', 'an optional tech label', 'an optional description')
@enduml
```

