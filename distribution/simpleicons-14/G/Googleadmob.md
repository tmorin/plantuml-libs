# Googleadmob


```text
simpleicons-14/G/Googleadmob
```

```text
include('simpleicons-14/G/Googleadmob')
```



| Illustration | Googleadmob |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googleadmob.png) | ![illustration for Googleadmob](../../simpleicons-14/G/Googleadmob.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleadmobXs>`
- `<$GoogleadmobSm>`
- `<$GoogleadmobMd>`
- `<$GoogleadmobLg>`





## Googleadmob

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleadmob
include('simpleicons-14/G/Googleadmob')

' renders the element
Googleadmob('Googleadmob', 'Googleadmob', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleadmob
include('simpleicons-14/G/Googleadmob')

' renders the element
Googleadmob('Googleadmob', 'Googleadmob', 'an optional tech label', 'an optional description')
@enduml
```

