# Sendinblue


```text
simpleicons-14/S/Sendinblue
```

```text
include('simpleicons-14/S/Sendinblue')
```



| Illustration | Sendinblue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sendinblue.png) | ![illustration for Sendinblue](../../simpleicons-14/S/Sendinblue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SendinblueXs>`
- `<$SendinblueSm>`
- `<$SendinblueMd>`
- `<$SendinblueLg>`





## Sendinblue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sendinblue
include('simpleicons-14/S/Sendinblue')

' renders the element
Sendinblue('Sendinblue', 'Sendinblue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sendinblue
include('simpleicons-14/S/Sendinblue')

' renders the element
Sendinblue('Sendinblue', 'Sendinblue', 'an optional tech label', 'an optional description')
@enduml
```

