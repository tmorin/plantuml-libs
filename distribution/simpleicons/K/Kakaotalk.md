# Kakaotalk


```text
simpleicons/K/Kakaotalk
```

```text
include('simpleicons/K/Kakaotalk')
```



| Illustration | Kakaotalk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kakaotalk.png) | ![illustration for Kakaotalk](../../simpleicons/K/Kakaotalk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KakaotalkXs>`
- `<$KakaotalkSm>`
- `<$KakaotalkMd>`
- `<$KakaotalkLg>`





## Kakaotalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kakaotalk
include('simpleicons/K/Kakaotalk')

' renders the element
Kakaotalk('Kakaotalk', 'Kakaotalk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kakaotalk
include('simpleicons/K/Kakaotalk')

' renders the element
Kakaotalk('Kakaotalk', 'Kakaotalk', 'an optional tech label', 'an optional description')
@enduml
```

