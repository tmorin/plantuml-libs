# Thunderbird


```text
simpleicons/T/Thunderbird
```

```text
include('simpleicons/T/Thunderbird')
```



| Illustration | Thunderbird |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Thunderbird.png) | ![illustration for Thunderbird](../../simpleicons/T/Thunderbird.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThunderbirdXs>`
- `<$ThunderbirdSm>`
- `<$ThunderbirdMd>`
- `<$ThunderbirdLg>`





## Thunderbird

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons/T/Thunderbird')

' renders the element
Thunderbird('Thunderbird', 'Thunderbird', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thunderbird
include('simpleicons/T/Thunderbird')

' renders the element
Thunderbird('Thunderbird', 'Thunderbird', 'an optional tech label', 'an optional description')
@enduml
```

