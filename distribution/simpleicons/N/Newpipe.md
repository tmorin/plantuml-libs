# Newpipe


```text
simpleicons/N/Newpipe
```

```text
include('simpleicons/N/Newpipe')
```



| Illustration | Newpipe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Newpipe.png) | ![illustration for Newpipe](../../simpleicons/N/Newpipe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NewpipeXs>`
- `<$NewpipeSm>`
- `<$NewpipeMd>`
- `<$NewpipeLg>`





## Newpipe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Newpipe
include('simpleicons/N/Newpipe')

' renders the element
Newpipe('Newpipe', 'Newpipe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Newpipe
include('simpleicons/N/Newpipe')

' renders the element
Newpipe('Newpipe', 'Newpipe', 'an optional tech label', 'an optional description')
@enduml
```

