# UniqloJa


```text
simpleicons/U/UniqloJa
```

```text
include('simpleicons/U/UniqloJa')
```



| Illustration | UniqloJa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/UniqloJa.png) | ![illustration for UniqloJa](../../simpleicons/U/UniqloJa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UniqloJaXs>`
- `<$UniqloJaSm>`
- `<$UniqloJaMd>`
- `<$UniqloJaLg>`





## UniqloJa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element UniqloJa
include('simpleicons/U/UniqloJa')

' renders the element
UniqloJa('UniqloJa', 'Uniqlo Ja', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UniqloJa
include('simpleicons/U/UniqloJa')

' renders the element
UniqloJa('UniqloJa', 'Uniqlo Ja', 'an optional tech label', 'an optional description')
@enduml
```

