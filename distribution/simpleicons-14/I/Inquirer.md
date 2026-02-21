# Inquirer


```text
simpleicons-14/I/Inquirer
```

```text
include('simpleicons-14/I/Inquirer')
```



| Illustration | Inquirer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Inquirer.png) | ![illustration for Inquirer](../../simpleicons-14/I/Inquirer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InquirerXs>`
- `<$InquirerSm>`
- `<$InquirerMd>`
- `<$InquirerLg>`





## Inquirer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Inquirer
include('simpleicons-14/I/Inquirer')

' renders the element
Inquirer('Inquirer', 'Inquirer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inquirer
include('simpleicons-14/I/Inquirer')

' renders the element
Inquirer('Inquirer', 'Inquirer', 'an optional tech label', 'an optional description')
@enduml
```

