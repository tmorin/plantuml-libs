# Everydotorg


```text
simpleicons/E/Everydotorg
```

```text
include('simpleicons/E/Everydotorg')
```



| Illustration | Everydotorg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Everydotorg.png) | ![illustration for Everydotorg](../../simpleicons/E/Everydotorg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EverydotorgXs>`
- `<$EverydotorgSm>`
- `<$EverydotorgMd>`
- `<$EverydotorgLg>`





## Everydotorg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Everydotorg
include('simpleicons/E/Everydotorg')

' renders the element
Everydotorg('Everydotorg', 'Everydotorg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Everydotorg
include('simpleicons/E/Everydotorg')

' renders the element
Everydotorg('Everydotorg', 'Everydotorg', 'an optional tech label', 'an optional description')
@enduml
```

