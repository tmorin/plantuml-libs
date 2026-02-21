# Onlyfans


```text
simpleicons/O/Onlyfans
```

```text
include('simpleicons/O/Onlyfans')
```



| Illustration | Onlyfans |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Onlyfans.png) | ![illustration for Onlyfans](../../simpleicons/O/Onlyfans.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OnlyfansXs>`
- `<$OnlyfansSm>`
- `<$OnlyfansMd>`
- `<$OnlyfansLg>`





## Onlyfans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Onlyfans
include('simpleicons/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Onlyfans
include('simpleicons/O/Onlyfans')

' renders the element
Onlyfans('Onlyfans', 'Onlyfans', 'an optional tech label', 'an optional description')
@enduml
```

