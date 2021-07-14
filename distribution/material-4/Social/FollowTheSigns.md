# FollowTheSigns


```text
material-4/Social/FollowTheSigns
```

```text
include('material-4/Social/FollowTheSigns')
```



| Illustration | FollowTheSigns |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/FollowTheSigns.png) | ![illustration for FollowTheSigns](../../material-4/Social/FollowTheSigns.Local.png) |




## FollowTheSigns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FollowTheSigns
include('material-4/Social/FollowTheSigns')

' renders the element
FollowTheSigns('FollowTheSigns', 'Follow The Signs', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element FollowTheSigns
include('material-4/Social/FollowTheSigns')

' renders the element
FollowTheSigns('FollowTheSigns', 'Follow The Signs', 'an optional tech label')
@enduml
```

