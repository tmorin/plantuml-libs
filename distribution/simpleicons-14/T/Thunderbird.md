# Thunderbird


```text
simpleicons-14/T/Thunderbird
```

```text
include('simpleicons-14/T/Thunderbird')
```



| Illustration | Thunderbird |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thunderbird.png) | ![illustration for Thunderbird](../../simpleicons-14/T/Thunderbird.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons-14/T/Thunderbird')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thunderbird
include('simpleicons-14/T/Thunderbird')

' renders the element
Thunderbird('Thunderbird', 'Thunderbird', 'an optional tech label', 'an optional description')
@enduml
```

