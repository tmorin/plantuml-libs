# Fillout


```text
simpleicons/F/Fillout
```

```text
include('simpleicons/F/Fillout')
```



| Illustration | Fillout |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fillout.png) | ![illustration for Fillout](../../simpleicons/F/Fillout.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilloutXs>`
- `<$FilloutSm>`
- `<$FilloutMd>`
- `<$FilloutLg>`





## Fillout

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fillout
include('simpleicons/F/Fillout')

' renders the element
Fillout('Fillout', 'Fillout', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fillout
include('simpleicons/F/Fillout')

' renders the element
Fillout('Fillout', 'Fillout', 'an optional tech label', 'an optional description')
@enduml
```

