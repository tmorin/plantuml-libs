# Email


```text
aws-q1-2024/Resource/GeneralIcons/Email
```

```text
include('aws-q1-2024/Resource/GeneralIcons/Email')
```



| Illustration | Email | EmailCard | EmailGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/GeneralIcons/Email.png) | ![illustration for Email](../../../aws-q1-2024/Resource/GeneralIcons/Email.Local.png) | ![illustration for EmailCard](../../../aws-q1-2024/Resource/GeneralIcons/EmailCard.Local.png) | ![illustration for EmailGroup](../../../aws-q1-2024/Resource/GeneralIcons/EmailGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmailXs>`
- `<$EmailSm>`
- `<$EmailMd>`
- `<$EmailLg>`





## Email

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element Email
include('aws-q1-2024/Resource/GeneralIcons/Email')

' renders the element
Email('Email', 'Email', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element Email
include('aws-q1-2024/Resource/GeneralIcons/Email')

' renders the element
Email('Email', 'Email', 'an optional tech label', 'an optional description')
@enduml
```

## EmailCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element EmailCard
include('aws-q1-2024/Resource/GeneralIcons/Email')

' renders the element
EmailCard('EmailCard', 'Email Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element EmailCard
include('aws-q1-2024/Resource/GeneralIcons/Email')

' renders the element
EmailCard('EmailCard', 'Email Card', 'an optional description')
@enduml
```

## EmailGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element EmailGroup
include('aws-q1-2024/Resource/GeneralIcons/Email')

' renders the element
EmailGroup('EmailGroup', 'Email Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element EmailGroup
include('aws-q1-2024/Resource/GeneralIcons/Email')

' renders the element
EmailGroup('EmailGroup', 'Email Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

