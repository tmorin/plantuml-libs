# Octave


```text
simpleicons-7/O/Octave
```

```text
include('simpleicons-7/O/Octave')
```



| Illustration | Octave |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Octave.png) | ![illustration for Octave](../../simpleicons-7/O/Octave.Local.png) |




## Octave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Octave
include('simpleicons-7/O/Octave')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Octave
include('simpleicons-7/O/Octave')

' renders the element
Octave('Octave', 'Octave', 'an optional tech label', 'an optional description')
@enduml
```

