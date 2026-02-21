# Headphonezone


```text
simpleicons/H/Headphonezone
```

```text
include('simpleicons/H/Headphonezone')
```



| Illustration | Headphonezone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Headphonezone.png) | ![illustration for Headphonezone](../../simpleicons/H/Headphonezone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadphonezoneXs>`
- `<$HeadphonezoneSm>`
- `<$HeadphonezoneMd>`
- `<$HeadphonezoneLg>`





## Headphonezone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Headphonezone
include('simpleicons/H/Headphonezone')

' renders the element
Headphonezone('Headphonezone', 'Headphonezone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Headphonezone
include('simpleicons/H/Headphonezone')

' renders the element
Headphonezone('Headphonezone', 'Headphonezone', 'an optional tech label', 'an optional description')
@enduml
```

