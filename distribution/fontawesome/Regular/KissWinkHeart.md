# KissWinkHeart


```text
fontawesome/Regular/KissWinkHeart
```

```text
include('fontawesome/Regular/KissWinkHeart')
```



| Illustration | KissWinkHeart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/KissWinkHeart.png) | ![illustration for KissWinkHeart](../../fontawesome/Regular/KissWinkHeart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KissWinkHeartXs>`
- `<$KissWinkHeartSm>`
- `<$KissWinkHeartMd>`
- `<$KissWinkHeartLg>`





## KissWinkHeart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KissWinkHeart
include('fontawesome/Regular/KissWinkHeart')

' renders the element
KissWinkHeart('KissWinkHeart', 'Kiss Wink Heart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KissWinkHeart
include('fontawesome/Regular/KissWinkHeart')

' renders the element
KissWinkHeart('KissWinkHeart', 'Kiss Wink Heart', 'an optional tech label', 'an optional description')
@enduml
```

