# Microgenetics


```text
simpleicons-8/M/Microgenetics
```

```text
include('simpleicons-8/M/Microgenetics')
```



| Illustration | Microgenetics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Microgenetics.png) | ![illustration for Microgenetics](../../simpleicons-8/M/Microgenetics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrogeneticsXs>`
- `<$MicrogeneticsSm>`
- `<$MicrogeneticsMd>`
- `<$MicrogeneticsLg>`





## Microgenetics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microgenetics
include('simpleicons-8/M/Microgenetics')

' renders the element
Microgenetics('Microgenetics', 'Microgenetics', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microgenetics
include('simpleicons-8/M/Microgenetics')

' renders the element
Microgenetics('Microgenetics', 'Microgenetics', 'an optional tech label', 'an optional description')
@enduml
```

