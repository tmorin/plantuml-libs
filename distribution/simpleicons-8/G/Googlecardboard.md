# Googlecardboard


```text
simpleicons-8/G/Googlecardboard
```

```text
include('simpleicons-8/G/Googlecardboard')
```



| Illustration | Googlecardboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googlecardboard.png) | ![illustration for Googlecardboard](../../simpleicons-8/G/Googlecardboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglecardboardXs>`
- `<$GooglecardboardSm>`
- `<$GooglecardboardMd>`
- `<$GooglecardboardLg>`





## Googlecardboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googlecardboard
include('simpleicons-8/G/Googlecardboard')

' renders the element
Googlecardboard('Googlecardboard', 'Googlecardboard', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googlecardboard
include('simpleicons-8/G/Googlecardboard')

' renders the element
Googlecardboard('Googlecardboard', 'Googlecardboard', 'an optional tech label', 'an optional description')
@enduml
```

