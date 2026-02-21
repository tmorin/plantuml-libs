# UnlockKeyhole


```text
fontawesome/Solid/UnlockKeyhole
```

```text
include('fontawesome/Solid/UnlockKeyhole')
```



| Illustration | UnlockKeyhole |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UnlockKeyhole.png) | ![illustration for UnlockKeyhole](../../fontawesome/Solid/UnlockKeyhole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnlockKeyholeXs>`
- `<$UnlockKeyholeSm>`
- `<$UnlockKeyholeMd>`
- `<$UnlockKeyholeLg>`





## UnlockKeyhole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UnlockKeyhole
include('fontawesome/Solid/UnlockKeyhole')

' renders the element
UnlockKeyhole('UnlockKeyhole', 'Unlock Keyhole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UnlockKeyhole
include('fontawesome/Solid/UnlockKeyhole')

' renders the element
UnlockKeyhole('UnlockKeyhole', 'Unlock Keyhole', 'an optional tech label', 'an optional description')
@enduml
```

