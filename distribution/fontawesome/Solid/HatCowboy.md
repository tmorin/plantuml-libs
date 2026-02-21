# HatCowboy


```text
fontawesome/Solid/HatCowboy
```

```text
include('fontawesome/Solid/HatCowboy')
```



| Illustration | HatCowboy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HatCowboy.png) | ![illustration for HatCowboy](../../fontawesome/Solid/HatCowboy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HatCowboyXs>`
- `<$HatCowboySm>`
- `<$HatCowboyMd>`
- `<$HatCowboyLg>`





## HatCowboy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HatCowboy
include('fontawesome/Solid/HatCowboy')

' renders the element
HatCowboy('HatCowboy', 'Hat Cowboy', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HatCowboy
include('fontawesome/Solid/HatCowboy')

' renders the element
HatCowboy('HatCowboy', 'Hat Cowboy', 'an optional tech label', 'an optional description')
@enduml
```

