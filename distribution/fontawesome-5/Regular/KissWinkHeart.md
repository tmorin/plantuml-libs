# KissWinkHeart


```text
fontawesome-5/Regular/KissWinkHeart
```

```text
include('fontawesome-5/Regular/KissWinkHeart')
```



| Illustration | KissWinkHeart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/KissWinkHeart.png) | ![illustration for KissWinkHeart](../../fontawesome-5/Regular/KissWinkHeart.Local.png) |




## KissWinkHeart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element KissWinkHeart
include('fontawesome-5/Regular/KissWinkHeart')

' renders the element
KissWinkHeart('KissWinkHeart', 'Kiss Wink Heart', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element KissWinkHeart
include('fontawesome-5/Regular/KissWinkHeart')

' renders the element
KissWinkHeart('KissWinkHeart', 'Kiss Wink Heart', 'an optional tech label')
@enduml
```

